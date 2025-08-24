const fs = require("fs");

// Function to create day folders and subfolders
const createDayFolders = (startDay, endDay) => {
  try {
    for (let day = startDay; day <= endDay; day++) {
      const dayFolderName = `Day ${day}`;
      const homeworkPath = `${dayFolderName}/Homework`;
      const classworkPath = `${dayFolderName}/Classwork`;

      // Create main folder for the day
      if (!fs.existsSync(dayFolderName)) {
        fs.mkdirSync(dayFolderName);
        console.log(`Folder '${dayFolderName}' created.`);
      } else {
        console.log(`Folder '${dayFolderName}' already exists.`);
      }

      // Create Homework and Classwork folders inside the day folder
      if (!fs.existsSync(homeworkPath)) {
        fs.mkdirSync(homeworkPath);
        console.log(`'Homework' folder created inside '${dayFolderName}'.`);
      }
      if (!fs.existsSync(classworkPath)) {
        fs.mkdirSync(classworkPath);
        console.log(`'Classwork' folder created inside '${dayFolderName}'.`);
      }

      // Add app.js files inside Homework and Classwork
      fs.writeFileSync(
        `${homeworkPath}/app.js`,
        `// Homework code for Day ${day}\nconsole.log('Homework Day ${day}');`
      );
      fs.writeFileSync(
        `${classworkPath}/app.js`,
        `// Classwork code for Day ${day}\nconsole.log('Classwork Day ${day}');`
      );
      console.log(
        `app.js files created in 'Homework' and 'Classwork' folders of '${dayFolderName}'.`
      );
    }
    console.log("All days created successfully!");
  } catch (err) {
    console.error("Error creating day folders:", err);
  }
};  

// Specify the range of days to create
const startDay = 146;
const endDay = 177;

createDayFolders(startDay, endDay);