export const smoothScrollTo = function(endX, endY, duration) {
  var startX = window.scrollX || window.pageXOffset,
    startY = window.scrollY || window.pageYOffset,
    distanceX = endX - startX,
    distanceY = endY - startY,
    startTime = new Date().getTime()

  duration = typeof duration !== "undefined" ? duration : 400

  // Easing function
  var easeInOutQuart = function(time, from, distance, duration) {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from
  }

  var timer = window.setInterval(function() {
    var time = new Date().getTime() - startTime,
      newX = easeInOutQuart(time, startX, distanceX, duration),
      newY = easeInOutQuart(time, startY, distanceY, duration)
    if (time >= duration) {
      window.clearInterval(timer)
    }
    window.scrollTo(newX, newY)
  }, 1000 / 60) // 60 fps
}

export const showTooltip = target => {
  let inTooltip = false
  let inContent = false
  // special class to disable commenting
  let noTooltip = false

  do {
    if ((target.tagName || "").toLowerCase() === "tooltip") {
      inTooltip = true
    }
    if ((target.tagName || "").toLowerCase() === "content") {
      inContent = true
    }

    if (target.classList && target.classList.contains("no-tooltip")) {
      noTooltip = true
    }

    target = target.parentNode
  } while (target)

  if (inTooltip) {
    return true
  }

  if (!inContent || (window.getSelection() + "").trim().length === 0) {
    return false
  }

  if (noTooltip) {
    return false
  }

  return true
}

export const getParentPara = target => {
  while ((target = target.parentNode)) {
    if (!target.className) {
      return null
    }

    if (target.className.includes("para")) {
      return target
    }
  }

  return null
}
