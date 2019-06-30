// Packages
import { Component } from 'react'

class Notion extends Component {
  static getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: 'https://www.notion.so/neuelabsco/home-f9b5df77ecfa48399f53943c21396017'
      })

      res.end()
    }
  }
}

export default Notion
