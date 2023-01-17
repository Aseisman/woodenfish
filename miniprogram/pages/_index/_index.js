// pages/_index/_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0,
    action: "stop",
    imgAnimation: '',
    textAnimation: '',
    recycleStatus:false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.imgAnimation = wx.createAnimation({
      delay: 0,
      duration: 150,
      timingFunction: 'linear',
      transformOrigin: '50% 50%',
    })
    this.textAnimation = wx.createAnimation({
      delay: 0,
      // duration:500,
      // timingFunction:'linear',
      duration: 500,
      timingFunction: 'ease-out',
      transformOrigin: '50% 50%',
    })
    // 音乐
    this.music = wx.createInnerAudioContext({
      useWebAudioImplement:true,
    });
    this.music.src = "audios/damuyu.mp3";
    // this.music.src = "https://music.163.com/style/swf/widget.swf?sid=1463165983&type=2&auto=1&width=320&height=66";
  },
  onClick: function (event) {
    // 动画
    this.imgAnimation.scale(0.9).step().scale(1.0).step();
    this.textAnimation.opacity(1).step({
      duration: 10,
    })
    this.textAnimation.translateY(-50).opacity(0).step({
      duration: 500,
    });
    this.textAnimation.translateY(0).step({
      duration: 10,
    });
    this.music.stop();
    this.music.play();
    // 数据更新
    this.setData({
      imgAnimation: this.imgAnimation.export(),
      textAnimation: this.textAnimation.export(),
      value: this.data.value + 1,
    })
  },
  stopplay:function(){
    clearInterval(this.timer);
    this.setData({
      recycleStatus:false,
    })
  },
  autoplay:function(){
    this.timer = setInterval(this.onClick,1000);
    this.setData({
      recycleStatus:true,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})