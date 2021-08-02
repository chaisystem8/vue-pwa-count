if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(
        reg => console.log('registro!')
    ).catch(
        err => console.log(err)
    )
}