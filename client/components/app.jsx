import React from 'react';
import Clock from './clock';
import ClockList from './clockList';
import crypto from 'crypto';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.clockSelect = this.clockSelect.bind(this);
    this.state = {
      classes: 'clock',
      secret: [],
      farm: [],
      server: [],
      secret: [],
      count: 0
    }
  }

  randomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  clockSelect(e){
    console.log(e.target.className.split(' ')[1]);
    var nonce = this.randomString(32);
    var timestamp = +Date.now();
    var secret = [];
    var farm = [];
    var server = [];
    var id = [];
    var that = this;
    console.log(timestamp)
    console.log(nonce);
    // var text = 'GET&https%3A%2F%2Fwww.flickr.com%2services%2oauthrequest_token' +
    //             '?oauth_nonce=' + nonce +
    //             '&oauth_timestamp=' + timestamp + 
    //             '&oauth_consumer_key=' + 
    //             '&oauth_signature_method=HMAC-SHA1' +
    //             '&oauth_version=1.0' +
    //             '&oauth_callback=http%3A%2F%2Fwww.vrpacman.com';
    // var text = 'GET&https%3A%2F%2Fwww.flickr.com%2Fservices%2Foauth%2Frequest_token&oauth_callback%3Dhttp%253A%252F%252Fwww.vrpacman.com%26oauth_consumer_key%3D%26oauth_nonce%3D' + nonce + '%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D' + timestamp + '%26oauth_version%3D1.0';
    // var key = '&';
    // var hash = crypto.createHmac('sha1', key).update(text).digest('hex');
    // var base64String = new Buffer(hash, 'hex').toString('base64');
    // console.log(hash);
    // console.log(base64String);
    // $.get('https://www.flickr.com/services/oauth/request_token' +
    //       '?oauth_nonce=' + nonce +
    //       '&oauth_timestamp=' + timestamp + 
    //       '&oauth_consumer_key=' + 
    //       '&oauth_signature_method=HMAC-SHA1' +
    //       '&oauth_version=1.0' +
    //       '&oauth_signature=' + base64String +
    //       '&oauth_callback=http%3A%2F%2Fwww.vrpacman.com', function(data){
    //   console.log("Data: " + data + typeof data);
    //   console.log(data.slice(42, 76));
    //   var token = data.slice(42, 76);
    //   var link = document.getElementsByClassName('oauth')[0];
    //   link.href = 'https://www.flickr.com/services/oauth/authorize?oauth_token=' + token;
    // });
    // var text = 'GET&https%3A%2F%2Fwww.flickr.com%2Fservices%2Foauth%2Faccess_token&oauth_verifier=&oauth_token=%26oauth_consumer_key%3D%26oauth_nonce%3D' + nonce + '%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D' + timestamp + '%26oauth_version%3D1.0';
    // var key = '&';
    // var hash = crypto.createHmac('sha1', key).update(text).digest('hex');
    // var base64String = new Buffer(hash, 'hex').toString('base64');
    // console.log(hash);
    // console.log(base64String);
    $.get('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=&user_id=94676348%40N03&format=rest&auth_token=&api_sig=', function(data){
      // console.log("Data: " + data );
      // console.log(data.children[0].children[0].children);
      // console.log(data.children[0].children[0].children[0].getAttribute('secret'));
      // var secret = data.children[0].children[0].children[0].getAttribute('secret');
      // var farm = data.children[0].children[0].children[0].getAttribute('farm');
      // var serverId = data.children[0].children[0].children[0].getAttribute('server');
      // var id = data.children[0].children[0].children[0].getAttribute('id');

      // document.body.style.backgroundImage = "url('https://farm" + farm + ".staticflickr.com/" + serverId + "/" + id + "_" + secret + "_b.jpg')";
      
      for(var i = 0; i < data.children[0].children[0].children.length; i++ ) {
        secret.push(data.children[0].children[0].children[i].getAttribute('secret'));
        farm.push(data.children[0].children[0].children[i].getAttribute('farm'));
        server.push(data.children[0].children[0].children[i].getAttribute('server'));
        id.push(data.children[0].children[0].children[i].getAttribute('id'));
      }
      console.log(secret);
      console.log(farm);
      console.log(server);
      console.log(id);
      that.setState({
        secret: secret.slice(),
        farm: farm.slice(),
        server: server.slice(),
        id: id.slice()
      });
      // console.log(data.slice(42, 76));
      // var token = data.slice(42, 76);
      // var link = document.getElementsByClassName('oauth')[0];
      // link.href = 'https://www.flickr.com/services/oauth/authorize?oauth_token=' + token;
      // var x = document.getElementById('app');
      // x.append(data);
    });
    setInterval(function() {
        console.log('hello');
        this.change();
      }.bind(this), 5000);
  }
  change() {
    var secret = this.state.secret[this.state.count];
    var farm = this.state.farm[this.state.count];
    var server = this.state.server[this.state.count];
    var id = this.state.id[this.state.count];
    document.body.style.background = "url('https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + "_b.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';
    if(this.state.count === this.state.secret.length - 1) {
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: ++this.state.count
      });
    }
  }
  render () {
    return (
            <div className="app">
            <Clock classes={this.state.classes}/>
            <ClockList clockSelect={this.clockSelect}/>
            </div>);
  }
}