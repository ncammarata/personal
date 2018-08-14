import { observer } from "mobx-react"
import { CanvasSpace, Pt, Group } from "pts"

@observer
export default class BG extends Component {
  pts = null
  componentDidMount() {
    // Pts.namespace(window)
    const space = new CanvasSpace(this.pts)
    space.setup({ bgcolor: "blue" })

    const form = space.getForm()
    console.log("form is", form)

    space.add(() => {
      form.point(space.pointer, 10)
    })

    space.play().bindMouse()
  }

  show() {
    return (
      <bg style={{ flex: 1 }}>
        <canvas
          height={500}
          ref={canvas => {
            this.pts = canvas
          }}
        />
      </bg>
    )
  }

  styles = {}
}
