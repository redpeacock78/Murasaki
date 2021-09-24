<template>
  <div class="markdown-editor">
    <no-ssr>
      <div class="custom">
        <file-reader @load="model = $event" />
        <span class="pipe"></span>
        <p>
          {{ model.length }}文字 /
          {{ model.length === 0 ? 0 : model.trim().split(/\s+/).length }}単語
        </p>
      </div>
      <mavon-editor
        :toolbars="markdownOption"
        language="ja"
        @save="save"
        v-model="model"
      />
    </no-ssr>
  </div>
</template>

<script>
import FileReader from "./FileReader";
export default {
  components: {
    FileReader
  },
  data() {
    return {
      model: "",
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        quote: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        help: true,
        undo: true,
        redo: true,
        save: true,
        trash: true,
        subfield: true,
        preview: true,
        htmlcode: true,
        aligncenter: true,
        alignright: true,
        navigation: true
      }
    };
  },
  methods: {
    save: function() {
      const blob = new Blob([this.model], { type: "text/plain" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);

      const twoDigit = num => {
        return num < 10 ? `0${num.toString()}` : num;
      };
      const nowTime = new Date();
      const nowYear = twoDigit(nowTime.getFullYear());
      const nowMonth = twoDigit(nowTime.getMonth() + 1);
      const nowDay = twoDigit(nowTime.getDate());
      const nowHour = twoDigit(nowTime.getHours());
      const nowMin = twoDigit(nowTime.getMinutes());
      const nowSec = twoDigit(nowTime.getSeconds());

      const fileName = `${nowYear}${nowMonth}${nowDay}-${nowHour}${nowMin}${nowSec}.md`;
      link.download = fileName;
      link.click();
    }
  }
};
</script>

<style lang="scss" scoped>
.markdown-editor {
  margin: auto;
  height: 80vh;
  width: 99vw;
}
</style>
