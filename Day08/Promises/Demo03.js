// ## Callback Hell & Pyramid of Doom ##

// --> When we have callback inside callbacks, then the code gets difficult to manage.


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
            if (error) {
                    console.log(error)
                    sendEmergencyMessageToCeo();
                    return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                    if (error) {
                            console.log(error)
                            sendEmergencyMessageToCeo();
                            return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                            if (error) {
                                    console.log(error)
                                    sendEmergencyMessageToCeo();
                                    return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                    if (error) {
                                            console.log(error)
                                            sendEmergencyMessageToCeo();
                                            return
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                            if (error) {
                                                    console.log(error)
                                                    sendEmergencyMessageToCeo();
                                                    return
                                            }
                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                    if (error) {
                                                            console.log(error)
                                                            sendEmergencyMessageToCeo();
                                                            return
                                                    }
                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                            if (error) {
                                                                    console.log(error)
                                                                    sendEmergencyMessageToCeo();
                                                                    return
                                                            }
                                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })
})

// --> As calls become more nested, the code becomes deeper and increasingly more difficult to manage

// --> This is sometimes called "Callback Hell" or "Pyramid of Doom".

// --> The pyramid of these calls grows towards the right with every asynchronous action.
// Soon it out of control. So this way of coding isn't very good.