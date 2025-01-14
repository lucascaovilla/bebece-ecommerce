#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Error: Please specify a component path. Example: components/Header');
  process.exit(1);
}

const componentPath = args[0];
const srcDir = path.resolve(__dirname, '../src');
const fullPath = path.join(srcDir, componentPath);

const componentName = path.basename(componentPath);

const componentTemplate = `
import React from 'react';
import './${componentName}.scss';

const ${componentName} = () => {
  return (
    <div className="${componentName.toLowerCase()}">
      <h1>${componentName} Component</h1>
    </div>
  );
};

export default ${componentName};
`;

const scssTemplate = `
.${componentName.toLowerCase()} {
  /* Add your styles here */
}
`;

const indexTemplate = `
export { default } from './${componentName}';
`;

const createFile = (filePath, content) => {
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
};

const generateComponent = () => {
  try {
    fs.mkdirSync(fullPath, { recursive: true });

    createFile(path.join(fullPath, `${componentName}.jsx`), componentTemplate);
    createFile(path.join(fullPath, `${componentName}.scss`), scssTemplate);

    console.log(`Component ${componentName} created successfully at ${fullPath}`);
  } catch (error) {
    console.error(`Error creating component: ${error.message}`);
  }
};

generateComponent();
