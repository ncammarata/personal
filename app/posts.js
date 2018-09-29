import Satisfaction from "./views/posts/satisfaction"
import Interviewing from "./views/posts/interviewing"

export default [
  {
    name: "A Framework for Life Satisfaction",
    view: Satisfaction,
    url: "satisfaction",
    stage: 1,
  },
  {
    name: "A Hack for Nailing Startup Interviews",
    view: Interviewing,
    url: "interviews",
    stage: 0,
  },
]
