<template>
  <div class="container">
    <div class="box"></div>
    <label
      for="file-input"
      class="my-button"
      :class="{ 'my-button-hover': hover }"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <h5>Upload File !</h5>
      <input id="file-input" type="file" @change="handleFileUpload" style="display: none" />
    </label>
    <div class="box2" v-if="imageData">
      <div v-if="!showTable" class="uploaded-image">
        <img :src="imageData" alt="uploaded image" @load="handleImageLoad" />
      </div>
      <div v-else class="table-container">
        <table class="file-details">
          <thead>
            <tr>
              <th>Top Green Box</th>
              <th>Left Green Box</th>
              <th>Right Green Box</th>
              <th>Bottom Green Box</th>
              <th>Middle Red Box</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="top"><h4>80% Healthy</h4></td>
              <td id="Left"><h4>89% Healthy</h4></td>
              <td id="Right"><h4>76% Healthy</h4></td>
              <td id="Bottom"><h4>90% Healthy</h4></td>
              <td id="Middle"><h4>95% Cancer</h4></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  position: relative;
}
.box {
  width: 500px;
  height: 400px;
  background-color: rgb(28 28 28 / 96%);
  border-radius: 20px;
  margin: 0 auto;
  align-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.my-button {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 17px;
  padding: 6px 10px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-radius: 20px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  width: 120px;
  height: 60px;
  text-align: center;
}
.my-button-hover {
  background-color: hsl(160deg 100% 37.06%);
  border-radius: 50px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  width: 140px;
}
.box2 {
  width: 500px;
  height: 400px;
  background-color: rgb(28 28 28 / 96%);
  border-radius: 20px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.uploaded-image img {
  max-width: 70%;
  max-height: 70%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}
.file-details {
  margin-top: 10px;
  text-align: center;
}
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
}

tr {
  margin-bottom: 10px;
}
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #fff;
}

#loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -60px 0 0 -60px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      hover: false,
      imageData: null,
      fileName: '',
      fileSize: 0,
      showTable: false
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.imageData = reader.result
        this.fileName = file.name
        this.fileSize = file.size
        setTimeout(() => {
          const imgBox = document.querySelector('.box')
          imgBox.style.backgroundImage = `url(https://ik.imagekit.io/e6f7u75tch/y92.jpg)`
          console.log('Image accessed correctly.')
          this.showTable = true
        }, 2000)
      }
    },
    getFileType(imageData) {
      if (imageData) {
        const typeStart = imageData.indexOf(':') + 1
        const typeEnd = imageData.indexOf(';')
        return imageData.substring(typeStart, typeEnd)
      }
      return ''
    },
    getFileSize(fileSize) {
      if (fileSize) {
        return (fileSize / 1000).toFixed(2) + ' KB'
      }
      return ''
    }
  }
}
window.addEventListener('load', function () {
  // hide the preloader when the page has finished loading
  const preloader = document.getElementById('preloader')
  preloader.style.display = 'none'
})
</script>
