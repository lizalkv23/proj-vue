<template>
  <main :class="{ shifted: showSidebar }">
    <div class="container">
      <div class="gallery">
        <div
          v-for="card in cards"
          :key="card.id"
          class="card"
          :style="{ backgroundColor: card.backgroundColor }">
          <div class="card-image">
            <img :src="card.image" alt="Card Image" />
          </div>
          <div class="card-caption">
            {{ card.caption }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import seaImage from "@/assets/sea.jpg"
import sea1Image from "@/assets/sea1.jpg"
export default {
  props: {
    showSidebar: Boolean,
  },
  data() {
    return {
      cards: [
        { id: 1, image: seaImage, caption: "Природа" },
        { id: 2, image: sea1Image, caption: "Море" },
        { id: 3, image: sea1Image, caption: "Море" },
        { id: 4, image: sea1Image, caption: "Море" },
        { id: 5, image: sea1Image, caption: "Море" },
        { id: 6, image: sea1Image, caption: "Море" },
        { id: 7, image: sea1Image, caption: "Море" },
        { id: 67, image: sea1Image, caption: "Море" },
        { id: 8, image: sea1Image, caption: "Море" },
        { id: 69, image: sea1Image, caption: "Море" },
        { id: 62, image: sea1Image, caption: "Море" },
        { id: 65, image: sea1Image, caption: "Море" },
        // Добавьте другие карточки с разными изображениями и подписями здесь
      ],
    }
  },
  methods: {
    generateRandomColor() {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      return `rgb(${r}, ${g}, ${b})`
    },
  },
  created() {
    this.cards.forEach((card) => {
      card.backgroundColor = this.generateRandomColor()
    })
  },
}
</script>

<style scoped>
main {
  margin-top: 60px;
  padding: 1.5625rem;
  transition: margin-left 0.3s;
}

main.shifted {
  margin-left: 275px;
}
.container {
}
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.card {
  padding: 10px;
  border-radius: 8px;
}
.card-image {
  padding-bottom: 50%;
  position: relative;
}
.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-caption {
  margin-top: 10px;
  text-align: center;
  color: #e9e6e6;
}
</style>
