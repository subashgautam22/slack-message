
const axios = require('axios');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});
// Create and Save new employee
exports.create = (req, res) => {



    
  run().then(result=>{
    res.json({message : "message sent successfully"})
  }).catch(err => console.log(err));
    
  async function run() {
    
      const url = 'https://slack.com/api/chat.postMessage';
      const res = await axios.post(url, {
        channel: '#random',
        text: req.body.text ,
      }, { headers: { authorization: `Bearer ${process.env.slack_Token}` } });
    

      console.log('Done');
    }

}
