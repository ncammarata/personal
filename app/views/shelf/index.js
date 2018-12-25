import { observable } from "mobx"
import { observer } from "mobx-react"

const shelfSource = `
# Learning
Mindstorms
# AI
# Psychology
Never Split The Difference 
How to Win Friends and Influence People
When Panic Attacks
Feeling Good
Superforecasting
# Computing
# Startups
Zero to One
Paul Graham
Naval Ravikant
Hackers and Painters
# Cooking
# People
Leonardo Da Vinci - Walter Isaacson
Becoming Steve Jobs
# Places
History of Future Cities
# Mind
The Doors of Perception and Heaven and Hell
Acid Test: LSD, Ecstasy, and the Power to Heal
# Stories
Salt: A World History
`

const parseShelf = shelfSource => {
  const lines = shelfSource
    .split(`\n`)
    .map(l => l.trim())
    .filter(l => l.length > 0)

  const shelf = {}
  let currentItem
  lines.forEach(line => {
    if (line.indexOf("#") === 0) {
      currentItem = line.slice(1).trim()
      shelf[currentItem] = []
    } else {
      shelf[currentItem].push(line)
    }
  })
  return shelf
}

const shelf = parseShelf(shelfSource)
class Store {
  @observable
  activeGroup = null

  select = group => {
    this.activeGroup = group
  }

  get activeList() {
    if (!this.activeGroup) {
      return []
    }

    return shelf[this.activeGroup]
  }
}

@observer
export default class Shelf extends Component {
  componentWillMount() {
    this.store = new Store()
  }

  show() {
    const { activeList, activeGroup } = this.store
    console.log("rendering", activeGroup)

    return (
      <container>
        <groups>
          {Object.keys(shelf).map(group => (
            <group
              $activeGroup={group === activeGroup}
              onClick={() => this.store.select(group)}
            >
              <name>{group}</name>
              <count>{shelf[group].length}</count>
            </group>
          ))}
        </groups>
        <list>
          {activeList.map(item => (
            <item>{item}</item>
          ))}
        </list>
      </container>
    )
  }

  styles = {
    container: {
      flexFlow: "row",
    },
    groups: {},
    group: {
      flexFlow: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: 140,
      padding: `10px 10px`,
      borderBottom: `1px solid rgba(0, 0, 0, 0.04)`,
      opacity: 0.6,
    },
    activeGroup: {
      opacity: 1,
    },
    count: {
      padding: `2px 10px`,
      fontSize: 12,
      fontWeight: 600,
      background: `rgba(0, 0, 0, 0.1)`,
      border: `1px solid rgba(0, 0, 0, 0.3)`,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    round: {
      border: `2px solid rgb(157,185,237)`,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      alignSelf: "center",
    },
    name: {
      marginTop: 5,
      alignSelf: "center",
    },
  }
}
