Deploying React App to GitHub

1. Create React app
    npm init react-app ./[foldername]           => if you use this command; first [foldername] folder is created and react app is created inside it.
    npm init react-app .                        => if you use this comman; react app is created in whichever folder you are in.

2. Change the codes with yours(Just do what you need normally)

3. Install gh-pages
    npm i gh-pages --save-dev

4. Change your 'package.json' file;

    4.1. Add '"homepage": "https://[YourGitHubAccountName].github.io/[YourProjectName]"' into first obje, around name and version, like:    
        {     
         "name": ...,
         "homepage": "https://[YourGitHubAccountName].github.io/[YourProjectName]",
         "version": ...,
         .
         .
         .
         }

    4.2. Add '"predeploy": "npm run build" and "deploy": "gh-pages -d build"' into scripts. like:
        .
        .
        .
        "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        .
        .
        .
        }

##### One of the most important thing in here after adding the homepage. You need the change your paths in your code

#### For example if you are using the '/' as a home page when you run the project (npm start) app open in http://localhost:3000/
#### For example if you are using the '/test' as a home page when you run the project (npm start) app open in http://localhost:3000/test

### Therefore after adding the homepage in the package.json file we need to update other path in the code
### For example we add the "homepage": "https://[YourGitHubAccountName].github.io/[YourProjectName]" so our '/' paths become '/[YourProjectName]'                           or '/test' become '/[YourProjectName]/test'


Now Before deployment we gonna push our code into github

5. Push your code to github
    git init
    git remote add origin https://github.com/[YourGithubAccountName]/[YourProjectName].git
    git add .           => adding all folder
    git commit -m "[your comment for commit]"
    git push -u origin master

After these steps we pushed all ours code into our github account.

6.  Deploy your app

    for deployment we have 2 option:

    6.1. Deploy with your local command line
        npm run deploy
    
    6.2. Deploy with github setting
        Goto Settings in your project and navigate to 'Pages' tab.
        In the source select gh-pages as a Branch
        And select to /(root) as a folder
        And click the save button.

7.  After deployment you can go to Actions tab and observe your building process
    
