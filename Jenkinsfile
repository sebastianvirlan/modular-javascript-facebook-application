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
        mail(subject: 'sdfsd', body: 'dsfsd')
      }
    }
    stage('production') {
      steps {
        sleep 4
      }
    }
  }
}