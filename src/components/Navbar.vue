<template>
  <!-- SECTION: Menu 5 -->
  <section
    class='fixed h-screen flex flex-col justify-between items-center py-8 w-24 border-r bg-gray-100 border-gray-200'
  >
    <!-- SECTION: Eco Conso's Logo -->
    <router-link
        to='/'
    >
    <img
      class='w-auto h-10 object-cover object-center'
      src='@/assets/images/logo.png'
      alt="Eco Conso's Logo"
    />
    </router-link>
    <!-- !SECTION: Eco Conso's Logo -->

    <!-- SECTION: Menu List -->
    <div class='menu-list ml-4 flex flex-col w-full items-center'>
      <router-link
        to='/'
        class='transition duration-400 ease-in-out relative w-full p-4 pl-0 my-1 text-gray-500 rounded-l-lg hover:text-blue-500  hover:bg-purple-700'
      >
        <svg
          class='m-auto'
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M27.7083 30.625H7.29159C6.90481 30.625 6.53388 30.4714 6.26039 30.1979C5.9869 29.9244 5.83325 29.5535 5.83325 29.1667V16.0417H1.45825L16.5185 2.35088C16.787 2.10658 17.1369 1.97119 17.4999 1.97119C17.8629 1.97119 18.2129 2.10658 18.4814 2.35088L33.5416 16.0417H29.1666V29.1667C29.1666 29.5535 29.0129 29.9244 28.7395 30.1979C28.466 30.4714 28.095 30.625 27.7083 30.625ZM18.9583 27.7084H26.2499V13.354L17.4999 5.40025L8.74992 13.354V27.7084H16.0416V18.9584H18.9583V27.7084Z'
            fill='#DDDEE0'
          />
        </svg>
      </router-link>
      <router-link
        to='/rooms'
        class='transition duration-400 ease-in-out relative w-full p-4 pl-0 my-1 text-gray-500 rounded-l-lg hover:text-blue-500  hover:bg-purple-700'
      >
        <svg
          class='m-auto'
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.5 30.4794L24.7188 23.2606C26.1463 21.8329 27.1185 20.014 27.5123 18.0338C27.9061 16.0536 27.7038 14.0011 26.9312 12.1358C26.1585 10.2705 24.8501 8.67628 23.1713 7.55462C21.4926 6.43296 19.519 5.83428 17.5 5.83428C15.481 5.83428 13.5074 6.43296 11.8287 7.55462C10.1499 8.67628 8.84151 10.2705 8.06883 12.1358C7.29616 14.0011 7.09394 16.0536 7.48775 18.0338C7.88155 20.014 8.8537 21.8329 10.2813 23.2606L17.5 30.4794ZM17.5 34.6035L8.21917 25.3227C6.38362 23.4871 5.13361 21.1485 4.62719 18.6025C4.12077 16.0565 4.3807 13.4175 5.3741 11.0192C6.36751 8.62096 8.04977 6.57113 10.2082 5.12894C12.3666 3.68676 14.9041 2.91699 17.5 2.91699C20.0959 2.91699 22.6335 3.68676 24.7918 5.12894C26.9502 6.57113 28.6325 8.62096 29.6259 11.0192C30.6193 13.4175 30.8792 16.0565 30.3728 18.6025C29.8664 21.1485 28.6164 23.4871 26.7808 25.3227L17.5 34.6035ZM17.5 18.9585C18.2736 18.9585 19.0154 18.6513 19.5624 18.1043C20.1094 17.5573 20.4167 16.8154 20.4167 16.0419C20.4167 15.2683 20.1094 14.5265 19.5624 13.9795C19.0154 13.4325 18.2736 13.1252 17.5 13.1252C16.7265 13.1252 15.9846 13.4325 15.4376 13.9795C14.8906 14.5265 14.5833 15.2683 14.5833 16.0419C14.5833 16.8154 14.8906 17.5573 15.4376 18.1043C15.9846 18.6513 16.7265 18.9585 17.5 18.9585ZM17.5 21.8752C15.9529 21.8752 14.4692 21.2606 13.3752 20.1667C12.2813 19.0727 11.6667 17.589 11.6667 16.0419C11.6667 14.4948 12.2813 13.0111 13.3752 11.9171C14.4692 10.8231 15.9529 10.2085 17.5 10.2085C19.0471 10.2085 20.5308 10.8231 21.6248 11.9171C22.7188 13.0111 23.3333 14.4948 23.3333 16.0419C23.3333 17.589 22.7188 19.0727 21.6248 20.1667C20.5308 21.2606 19.0471 21.8752 17.5 21.8752Z'
            fill='#DDDEE0'
          />
        </svg>
      </router-link>
      <router-link
        to='/budget'
        class='transition duration-400 ease-in-out relative w-full p-4 pl-0 my-1 text-gray-500 rounded-l-lg hover:text-blue-500  hover:bg-purple-700'
      >
        <svg
          class='m-auto'
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.5001 32.0832C9.44571 32.0832 2.91675 25.5542 2.91675 17.4998C2.91675 9.44546 9.44571 2.9165 17.5001 2.9165C25.5545 2.9165 32.0834 9.44546 32.0834 17.4998C32.0834 25.5542 25.5545 32.0832 17.5001 32.0832ZM17.5001 29.1665C20.5943 29.1665 23.5617 27.9373 25.7497 25.7494C27.9376 23.5615 29.1667 20.594 29.1668 17.4998C29.1667 14.4056 27.9376 11.4382 25.7497 9.25026C23.5617 7.06233 20.5943 5.83317 17.5001 5.83317C14.4059 5.83317 11.4384 7.06233 9.2505 9.25026C7.06258 11.4382 5.83342 14.4056 5.83342 17.4998C5.83342 20.594 7.06258 23.5615 9.2505 25.7494C11.4384 27.9373 14.4059 29.1665 17.5001 29.1665ZM14.6563 16.0415H21.8751V18.9582H14.6563C14.7827 19.5784 15.0683 20.1551 15.4852 20.6315C15.902 21.1079 16.4358 21.4675 17.0338 21.675C17.6318 21.8825 18.2736 21.9307 18.8959 21.8148C19.5182 21.699 20.0997 21.4232 20.583 21.0144L23.0622 22.6667C22.2103 23.5941 21.1095 24.2568 19.8913 24.5757C18.6731 24.8947 17.3888 24.8564 16.1918 24.4654C14.9947 24.0744 13.9354 23.3473 13.1403 22.3708C12.3452 21.3943 11.8478 20.2096 11.7076 18.9582H10.2084V16.0415H11.7061C11.8459 14.7894 12.3431 13.6041 13.1384 12.627C13.9337 11.6499 14.9935 10.9223 16.1911 10.5313C17.3887 10.1402 18.6736 10.1022 19.8923 10.4217C21.1109 10.7411 22.2119 11.4047 23.0636 12.333L20.583 13.9853C20.0997 13.5765 19.5182 13.3007 18.8959 13.1848C18.2736 13.069 17.6318 13.1172 17.0338 13.3247C16.4358 13.5322 15.902 13.8918 15.4852 14.3682C15.0683 14.8445 14.7827 15.4212 14.6563 16.0415Z'
            fill='#DDDEE0'
          />
        </svg>
      </router-link>
    </div>
    <!-- !SECTION: Menu List -->

    <!-- SECTION: Profile Picture -->
    <img
      class='w-14 h-14 object-cover object-center rounded-full'
      src='https://images.unsplash.com/photo-1512334908415-1a4627565792?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      alt=''
    />
    <!-- !SECTION: Profile Picture -->
  </section>
  <!-- !SECTION: Menu 5 -->
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.menu-list {
  width: calc(100% - 1rem)
}

.menu-list a:hover path {
  fill: #97d8ec;
}

.menu-list a::after {
  content: '';
  opacity: 0;
  transition: opacity 100ms ease-in-out;
  position: absolute;
  top: 41%;
  left: 90%;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background-color: #97d8ec;
}

.menu-list a:hover::after {
  opacity: 1;
}
</style>
