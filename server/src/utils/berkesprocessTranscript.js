import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const file1 = require('./transcript3.json')
const file2 = require('./transcript2.json')

// BERKES VERSION: includes ability to process an existing map. only includes links after

//import myJson from './transcript1.json';
// process individual transcript and return single processed transcript
function processSingleTranscript(existingProcessedMap, transcript_json_list) {
    let processedMap = existingProcessedMap

    // iterating all transcripts
    for (const transcript_json of transcript_json_list) {

        let prevIntent = undefined
        // iterating each message in a single transcript
        for (let i = 0; i < transcript_json.length; i++) {
            let message = transcript_json[i];
            // some intents have multiple intents, so we iterate through that as well
            for (const intent of message.intents) {
                if (!processedMap.has(intent)) {
                    processedMap.set(intent, [1, new Map()])
                }
                else {
                    const currList = processedMap.get(intent)
                    const newIntentFreq = currList[0] + 1
                    const sameAssociateMap = currList[1]

                    processedMap.set(intent, [newIntentFreq, sameAssociateMap])
                }
                if (prevIntent !== undefined) {
                    const currList = processedMap.get(prevIntent)
                    let newAssociateMap = currList[1]
                    if (!newAssociateMap.has(intent)) {
                        newAssociateMap.set(intent, 1)
                    }
                    else {
                        const newIntentAssociateFreq = newAssociateMap.get(intent) + 1
                        newAssociateMap.set(intent, newIntentAssociateFreq)
                    }
                }
                prevIntent = intent
            }
        }
    }
}
processSingleTranscript([file1, file2])
module.exports = processSingleTranscript

// add processed transcript to the aggregate processed transcript
