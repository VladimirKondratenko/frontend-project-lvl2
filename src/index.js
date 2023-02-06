import _ from 'lodash';

const genDiff = (firstFile, secondFile) => {
  const parseFirstFile = JSON.parse(firstFile);
  const parseSecondFile = JSON.parse(secondFile);
  const keysFirstFile = Object.keys(parseFirstFile);
  const keysSecondFile = Object.keys(parseSecondFile);
  const uniq = _.uniq([...keysFirstFile, ...keysSecondFile]);
  const sortUniq = _.sortBy(uniq);

  const result = sortUniq.map(
    (key) => {
      const valuesFirstFile = parseFirstFile[key];
      const valuesSecondFile = parseSecondFile[key];

      if (valuesFirstFile === valuesSecondFile) {
        return `  ${key} : ${valuesFirstFile}`;
      }

      if ((valuesFirstFile && valuesSecondFile) && (valuesFirstFile !== valuesSecondFile)) {
        return `- ${key} : ${valuesFirstFile} + ${key} : ${valuesSecondFile} `;
      }

      if (valuesFirstFile !== undefined && !valuesSecondFile) {
        return `- ${key} : ${valuesFirstFile}`;
      }

      if (!valuesFirstFile && valuesSecondFile !== undefined) {
        return `+ ${key} : ${valuesSecondFile}`;
      }

      return 0;
    },
  );
  return result;
};

export default genDiff;
