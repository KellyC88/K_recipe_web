<template>
  <div class="Home">
    <div class="first_layer">
      <NavBar />
    <div class="brand_concept">
      <h4 class="concept">Brand concept / Brand concept / Brand concept/Brand concept/ Brand concept/</h4>
      <img class="brand_bgimg" src="@/assets/plant.jpg" alt="">
    </div>
    
  </div>
  <div class="product_set1" ref="productSet1">
    <h3 class="topic">Most Popular</h3>
    <div class="box">
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:1}}">
        <div class="img_overlay">
          <div class="img_text">OATMEAL</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/oat.jpg"></a>
      </router-link>
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:2}}">
        <div class="img_overlay">
          <div class="img_text">SOURDOUGH</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/brekkie.jpg"></a>
      </router-link>
      <router-link class="img_container"  :to="{name:'ProductDetails', params:{id:3}}">
        <div class="img_overlay"> 
          <div class="img_text">CROISSANT</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </router-link>
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:4}}">
        <div class="img_overlay">
          <div class="img_text">LEMONTEA</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product5.jpg"></a>
      </router-link>
    </div>
  </div>
  <div class="intro_box">
      <h4 class="intro">ALAALALA/</h4>
      <img class="intro_bgimg" src="../assets/plant.jpg" alt="">
    </div>
  <div class="product_set2" ref="productSet2">
    <h3 class="topic">OatMeal</h3>
    <div class="box">
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:5}}">
        <div class="img_overlay">
          <div class="img_text">Scrambled Oat</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/oatmeal01.jpg"></a>
      </router-link>
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:6}}">
        <div class="img_overlay">
          <div class="img_text">Granola</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/granola.jpg"></a>
      </router-link>
      <router-link class="img_container"  :to="{name:'ProductDetails', params:{id:1}}">
        <div class="img_overlay"> 
          <div class="img_text">Fruit Oatmeal</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/oat.jpg"></a>
      </router-link>
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:8}}">
        <div class="img_overlay">
          <div class="img_text">Oatmeal02</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/oatmeal02.jpg"></a>
      </router-link>
    </div>
  </div>
  <div class="product_set3" ref="productSet3">
    <h3 class="topic">Breakfast</h3>
    <div class="box">
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:1}}">
        <div class="img_overlay">
          <div class="img_text">Baked French Toast</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/bake french toast.jpg"></a>
      </router-link>
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:2}}">
        <div class="img_overlay">
          <div class="img_text">Bagel</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/bagel.jpg"></a>
      </router-link>
      <router-link class="img_container"  :to="{name:'ProductDetails', params:{id:3}}">
        <div class="img_overlay"> 
          <div class="img_text">Oat Pancake</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/oat_pancake.jpg"></a>
      </router-link>
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:4}}">
        <div class="img_overlay">
          <div class="img_text">LEMONTEA</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product5.jpg"></a>
      </router-link>
    </div>
  </div>
  <div class="footer">
   <h3 class="footer_info">
    <span class="info1" >Tel : +886 912345678</span>
    <span class="info2" >Email : wabisabi26@gmail.com</span>
    <span class="footer_icon">
      <i class="fa-brands fa-instagram"></i>
    </span>
   </h3> 
  
  </div>

</div>
</template>
 
  

<script>
import NavBar from './NavBar.vue'


export default {
  name: 'Home',
  components: {
    NavBar,
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  methods: {
    setupIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const containers = entry.target.querySelectorAll('.img_container');
            containers.forEach((container, index) => {
              setTimeout(() => {
                container.classList.add('animate');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.4,
      });

      if (this.$refs.productSet1) observer.observe(this.$refs.productSet1);
      if (this.$refs.productSet2) observer.observe(this.$refs.productSet2);
      if (this.$refs.productSet3) observer.observe(this.$refs.productSet3);
    },
  },
}
</script>

