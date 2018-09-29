import { Link } from "react-router-dom"
import { H2, Quote } from "./components"

export default class Interviewing extends Component {
  show() {
    return (
      <post>
        <h1>A Hack to Nail Startup Interviews</h1>
        <H2>A Personal Story</H2>
        <p>
          In high school I wanted to work with an in-person team. I had done
          remote consulting for a few years, but I viewed working with real
          people on code together as{" "}
          <a href="https://www.youtube.com/watch?v=hwWzHqipWug">
            Scrat views Acorn Paradise
          </a>
          .
        </p>
        <p>
          I lived in the smallest city in Massachusetts, and there were a couple
          small companies that had coders. Both were pretty far outside my
          expertise, and I convinced myself I wasn't interested in them after
          they told me repeatedly to go away.
        </p>
        <p>
          Then one day I saw a job opening at a firm in Boston that looked
          perfect. They specialized in a technology I love (interactive web
          applications) and had far too much space in an old factory that they
          navigated with scooters.
        </p>
        <p>
          After writing a way-too-long email and somehow deciding on the
          cringeful subject line "I'm really good at jQuery", I'm eternally
          grateful that the founders offered me an interview.
        </p>

        <p>
          During the in-person interview with the CEO and CTO, I was intensely
          interested in everything they had to say, because they were the only
          people I knew in person that could program. The moment I left their
          office I sat on the sidewalk and transcribed every technology they
          mentioned.
        </p>
        <p>
          The most interesting was an open-source graphics library the CTO
          started. I asked if I could help manage it, and he brushed off my
          question, saying probably not because it would take a lot of learning.
        </p>
        <H2>Give Yourself a Take-Home Project and Perform Magic</H2>
        <Quote
          text="Sometimes magic is just someone spending more time on something than anyone else might reasonably expect"
          author="Teller"
        />
        <p>
          I interpreted the CTO's "no" as a "yes", and decided to get a
          head-start on learning the library by spending all night building a
          game using it and sent a link to the CTO in the morning along with a
          thank you note for the interview.
        </p>
        <p>
          The CTO later told me that this was the deciding factor in me being
          hired over the other 100+ applicants. I had a lot going against me: my
          pitch to them involved working on the weekends, and commuting 3h+ a
          day after school.
        </p>
        <p>
          My game was mediocre, but it blew away his expectations of my thank
          you email. When the CTO showered the next morning, the{" "}
          <a href="http://paulgraham.com/top.html">top idea in his mind</a> was
          wondering how I pulled it off without any contact or library
          documentation. By the time he got into work and discussed the previous
          day's interviews with the team, I stood out.
        </p>
        <H2>Effort Leverage</H2>
        <p>
          Every career guide and grandmother will argue for putting effort into
          a great career, but I believe there are particularly good points of
          leverage that most people are not using.
        </p>
        <p>
          My game took 13 hours of time and most of it is fun. This is far less
          time say a college degree (~8,000 hours) and perhaps increased my
          chance of getting the job by more than a degree would. One way to view
          this is an investment in the general effort vs specific effort. A
          degree is a multiplier on the chance of getting any job, but these 13
          hours is a large multiplier at getting this particular job.
        </p>
        <p>
          Specific effort doesn't always make sense (for instance, consumer
          sales), but for objects like jobs where you are looking for one good
          win, they're often a great and underutilized tool.
        </p>
        <p>
          Although specific effort can take many forms, I think the particular
          algorithm of booking the latest interview you can in the day, then
          staying up all night producing something to include in a thank you
          letter particularly potent. The reason for the late interview is that
          you want to have time to work on your specific effort before they meet
          to discuss whether to hire you. If you're lucky, they'll meet in the
          morning while still actively thinking about how you pulled off your
          trick.
        </p>
        <p>
          Your project can be reading a book about a hero they mentioned and
          providing one good line of commentary they probably haven't
          considered. It could be a programming project like I did. Or it could
          be a thought-through attempt at solving a problem they mentioned
          within the company.
        </p>
        <H2>How Many People Do This?</H2>
        <p>
          As far as I can tell this is not common. One company I was part of
          interviewed hundreds of people for ~30 spots, and only one applicant
          did something remotely similar. He talked with his interviewer about a
          particular design problem the company was having with their product.
          The applicant went home and built a javascript bookmark that when
          clicked on the live site, redesigned a subset of the site to show his
          idea of how a feature could work. I wasn't one of the interviewers for
          his role, but it wasn't long before the entire office heard about his
          work, and he was hired immediately.
        </p>
        <p>
          Please <Link to="/contact">let me know</Link> if you have any
          thoughts, or if this was helpful to you.
        </p>
      </post>
    )
  }

  styles = {
    a: {
      textDecoration: "underline",
      color: `#0084B4`,
      fontWeight: 600,
    },
  }
}
