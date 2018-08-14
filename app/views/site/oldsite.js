
  show() {
    const width = 960
    const appRatio = 2048 / 1241
    console.log("in site")


    return (
      <Layout>
        <top>
          <left>

          <big>Read, Together</big>
          <smaller>
            Read more books. Have more fun. Increase your retention.
          </smaller>
          </imgHolder>
          </left>
          <right>
          <imgHolder>
            <img
              $screenshot
              width={width}
              height={width / appRatio}
              src={require("./app.png")}
            />
            </right>
          <top>
        <Richer />
        <Bible />
        <bottom>
          <left>
            <feature>Start Building your Library</feature>
          </left>
          <btn onClick={() => (window.location = "?library")}>
            Enter your Library
          </btn>
        </bottom>
      </Layout>
    )
  }

  styles = {
    big: {
      fontWeight: 600,
      fontSize: 40,
      textAlign: "center",
      marginTop: 30,
    },
    smaller: {
      fontSize: 30,
      textAlign: "center",
      marginTop: 10,
      marginBottom: 15,
    },
    imgHolder: {
      alignItems: "center",
    },
    screenshot: {
      display: "block",
    },
    bottom: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 5000,
      boxShadow: "1px -3px 5px rgba(0,0,0,0.05)",
      borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      flexFlow: "row",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      background: `rgba(255, 255, 255, 0.95)`,
    },
    feature: {
      fontSize: 22,
      textAlign: "center",
      fontWeight: 600,
      marginTop: 3,
      marginBottom: 3,
    },
    left: {
      marginRight: 25,
    },
    btn: {
      marginLeft: 25,
      textTransform: "uppercase",
      padding: "10px 20px",
      border: "1px solid rgba(0, 0, 0, 0.3)",
      borderRadius: 8,
      boxShadow: "6px 6px 25px rgba(0, 0, 0, 0.13)",
      justifyContent: "center",
      alignItems: "center",
      background: `rgba(0, 0, 0, 0.05)`,
      fontSize: 18,
      cursor: "pointer",
      fontWeight: 600,
    },
  }