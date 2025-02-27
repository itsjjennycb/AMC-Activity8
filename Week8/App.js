import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';


const App = () => {

  const [currentSection, setCurrentSection] = useState(0);

  const resumeData = {
    name: 'Kenny Cabubas',
    age: '21 years old',
    birthday: 'January 31, 2004',
    course: ' Bachelor of Science in Information Technology',
    education: [
      { level: 'Elementary School', institution: 'Bagong Barrio Elementary School', year: '2010-2016' },
      { level: 'High School', institution: 'Bagong Barrio National High School', year: '2016-2020' },
      { level: 'College', institution: 'Global Reciprocal Colleges', year: '2022-Present' },
    ],
    aboutMe: [`I'm now working on an information technology degree, where I'm solidifying my knowledge in database administration, computer networks, and software development.  In addition to practical expertise in web development, mobile application development, and database administration, my schooling has given me a thorough understanding of programming languages like Python, JavaScript, and Java.  In addition to my studies, I work at a fast food restaurant to help support myself both academically and financially..`
    ],
    projects: [
      {
        title: 'School Activities',
        description: 'AMC Subject, Week4 Activity',
        link: 'https://github.com/itsjjennycb/AMC-Week4-Activity.git',
      },
       {
        description: 'Websys Subject, Week3 Activity',
        link: 'https://github.com/itsjjennycb/WebSys_Week3_Activity.git',
      },
    ],
    extraSection: [
      { title: 'Skills', content: ['Html, Css', 'Editing', 'Python'] },
    ]
  };

  const handlePress = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % 5);
  };

  const renderSectionContent = () => {
    switch (currentSection) {
      case 0: 
        return (<View style={styles.nameContainer}>
            <Image 
              source={{ uri: 'https://i.ibb.co/q39pbjY2/download.jpg' }} 
              style={styles.nameImage}
            />
            <Text style={styles.sectionContent}>{resumeData.name}</Text>
            <Text style={styles.sectionContent}>{resumeData.age}</Text>
            <Text style={styles.sectionContent}>{resumeData.birthday}</Text>
            <Text style={styles.sectionContent}>{resumeData.course}</Text>
          </View>
        );

      case 1: 
        return (
          <View>
            {resumeData.education.map((edu, index) => (
              <Text key={index} style={styles.sectionContent}>
                {edu.level} - {edu.institution} ({edu.year})
              </Text>
            ))}
          </View>
        );
      case 2: 
        return <Text style={styles.sectionContent}>{resumeData.aboutMe}</Text>;
      case 3: 
        return (
          <View>
            {resumeData.projects.map((project, index) => (
              <View key={index} style={styles.projectContainer}>
                <Image source={{ uri: project.image }} style={styles.projectImage} />
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDescription}>{project.description}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(project.link)}>
                  <Text style={styles.projectLink}>View Project</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        );
      case 4: 
        return (
          <View>
            {resumeData.extraSection.map((section, index) => (
              <View key={index}>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                {section.content.map((item, i) => (
                  <Text key={i} style={styles.sectionContent}>{item}</Text>
                ))}
              </View>
            ))}
          </View>
        );
      default:
        return <Text>No section</Text>;
    }
  };

  return (
    <ScrollView style={styles.container} onTouchEnd={handlePress}>
      <Text style={styles.sectionHeader}>{['My Profile', 'Education', 'About Me', 'School Activities', 'Extra Section'][currentSection]}</Text>
      {renderSectionContent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gray',
  },
  nameImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: 'lightblue',
  },
  sectionContent: {
    fontSize: 22,
    marginBottom: 6,
    textAlign: 'center',
    backgroundColor: 'lightgreen',
  },
  projectContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  projectImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  projectLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default App;