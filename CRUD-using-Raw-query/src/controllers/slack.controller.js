
const axios = require('axios');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});
// Create and Save new employee
exports.create = (req, res) => {

// const slackToken =  `${process.env.slack_Token}`
const slackToken ="xoxb-3505662094784-3494651708561-gGCigimg4th1SfSkElmBf2SL"
    
  run().then(result=>{
    res.json({message : "message sent successfully"})
  }).catch(err => console.log(err));
    
  async function run() {
    
      const url = 'https://slack.com/api/chat.postMessage';
      const res = await axios.post(url, {
        channel: '#random',
        text: req.body.text ,
      }, { headers: { authorization: `Bearer ${slackToken}` } });
    

      console.log('Done');
    }

}
