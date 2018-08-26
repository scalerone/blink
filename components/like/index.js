// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      like:{
        type:Boolean,//必填
      },
      count:{
        type:Number
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据绑定
    //三元表达式
    //封装性  开放性
    //封装在内部，开放出来
    //粒度 -简单的功能 、复杂的功能
    //开放的属性放在属性列表
    // like:true,
    // count:99,
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like
      let count = this.properties.count

      count = like?count-1:count+1
      this.setData({
        count:count,
        like:!like
      })
      //console.log(event)
    }
  }
})
