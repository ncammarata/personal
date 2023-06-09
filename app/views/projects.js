import React from "react"
import { observer } from "mobx-react"

@observer
export default class Projects extends Component {
  show() {
    return (
      <home>
        <h2 style={{ fontSize: 22, marginBottom: 0 }}>Work</h2>
        <p>
         
        </p>
      </home>
    )
  }

  styles = {
    p: {
      fontSize: `1.1rem`,
      fontWeight: 500,
      marginTop: 5,
      lineHeight: 1.4,
    },
    line: {
      marginTop: 10,
      marginBottom: 10,
    },
  }
}
