pipeline {
    agent any 
    stages {
        stage("Checkout"){
            steps {
                checkout([$class: 'GitSCM', 
                    branches: [[name: '*/main']],
                    extensions: [[$class: 'CleanCheckout']], // clean workspace after checkout
                    userRemoteConfigs: [[url: 'https://github.com/tranvannhan1911/reactjs-multiple-environment.git']]])
            }
        }
        
        stage("Build"){
            steps {
                sh "npm install env-cmd"
                sh "npm run build:$ENV"
            }
        }
    }
}