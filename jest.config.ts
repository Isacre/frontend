export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
   moduleFileExtensions: [
     "tsx",
     "json",
     "js",
     "jsx"
   ],
  moduleNameMapper: { 
    '^axios$': 'axios/dist/node/axios.cjs',
     "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
     "\\.(css|less)$": "<rootDir>/mocks/fileMock.js", "src/(.*)": "<rootDir>/src/$1"},
 testEnvironment: 'jsdom',
};

