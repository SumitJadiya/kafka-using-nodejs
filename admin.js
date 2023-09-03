const { kafka } = require("./client");
console.log("hi")
async function init() {
    const admin =  kafka.admin();
    console.log("connecting to admin");
    await admin.connect().then;
    console.log("connected to admin");

    console.log("creating the topic now...")
    await admin.createTopics({
        topics: [{
            topic: 'rider-updates',
            numPartitions:2
        }]
    })

    console.log("topic is created now...")

    await admin.disconnect();
    console.log("disconnected...")
}

init();
