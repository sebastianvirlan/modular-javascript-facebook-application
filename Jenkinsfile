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
        echo 'Develop Deploy'
      }
    }
    stage('production') {
      steps {
        sleep 4
        echo 'Production Deploy'
      }
    }
  }
}