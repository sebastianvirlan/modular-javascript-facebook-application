pipeline {
  agent any
  stages {
    stage('Testing') {
      parallel {
        stage('Testing') {
          steps {
            sh 'cd /'
          }
        }
        stage('blalba') {
          steps {
            echo 'yeey'
          }
        }
      }
    }
    stage('dev') {
      steps {
        mail(subject: 'deploy dev', body: 'deploy dev', from: 'jenkins@sebastian.com', to: 'sebastian.virlan@gmail.com')
      }
    }
    stage('production') {
      steps {
        sleep 4
      }
    }
  }
}