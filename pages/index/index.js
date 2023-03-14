"use strict";
var common_vendor = require("../../common/vendor.js");
function getDate(type) {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (type === "start") {
    year = year - 10;
  } else if (type === "end") {
    year = year + 10;
  }
  month = month > 9 ? month : "0" + month;
  day = day > 9 ? day : "0" + day;
  return `${year}-${month}-${day}`;
}
const _sfc_main = {
  data() {
    return {
      title: "Event Planer",
      activeInput: false,
      tetxShow: false,
      event: "",
      day: "12:01",
      chemess: "Planned Event",
      list: [{ title: "Have a party", time: "2021-1-23", day: "12:45" }, { title: "Go shopping with emily", time: "2020-7-23", day: "10:20" }],
      index: 0,
      date: getDate({
        format: true
      }),
      startDate: getDate("start"),
      endDate: getDate("end")
    };
  },
  onLoad() {
  },
  computed: {
    listData() {
      let list = JSON.parse(JSON.stringify(this.list));
      return list;
    }
  },
  methods: {
    creat() {
      if (this.activeInput) {
        this.close();
      } else {
        this.open();
      }
    },
    open() {
      this.activeInput = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.tetxShow = true;
        }, 50);
      });
    },
    close() {
      this.tetxShow = false;
      this.$nextTick(() => {
        setTimeout(() => {
          this.activeInput = false;
        }, 350);
      });
    },
    pickerChanged(e) {
      this.index = e.detail.value;
    },
    bindTimeChange: function(e) {
      this.day = e.detail.value;
    },
    submitInput() {
      this.activeInput = false;
      common_vendor.index.setStorageSync("event", this.event);
      common_vendor.index.setStorageSync("date", this.date);
      common_vendor.index.setStorageSync("day", this.day);
      this.list.unshift({
        title: common_vendor.index.getStorageSync("event"),
        time: common_vendor.index.getStorageSync("date"),
        day: common_vendor.index.getStorageSync("day")
      });
      this.close();
      this.event = "";
    }
  },
  watch: {
    event() {
      common_vendor.index.setStorageSync("event", this.event);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.chemess),
    b: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.time),
        c: common_vendor.t(item.day),
        d: item.title
      };
    }),
    c: common_vendor.t($data.title),
    d: $data.tetxShow ? 1 : "",
    e: common_vendor.o((...args) => $options.creat && $options.creat(...args)),
    f: $data.activeInput
  }, $data.activeInput ? {
    g: $data.event,
    h: common_vendor.o(($event) => $data.event = $event.detail.value),
    i: common_vendor.t($data.date),
    j: $data.date,
    k: $data.startDate,
    l: $data.endDate,
    m: common_vendor.o((...args) => _ctx.bindDateChange && _ctx.bindDateChange(...args)),
    n: common_vendor.t($data.day),
    o: common_vendor.o((...args) => $options.bindTimeChange && $options.bindTimeChange(...args)),
    p: common_vendor.o((...args) => $options.submitInput && $options.submitInput(...args)),
    q: $data.tetxShow ? 1 : ""
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u4FE1\u7BA1/\u5927\u4E09\u4E0B/\u79FB\u52A8\u5F00\u53D1/Vue/node.js-portable-MAD/work/My-uniapp/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
