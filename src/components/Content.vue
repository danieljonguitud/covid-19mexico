<template>
    <div class="px-4 text-gray-800 flex-grow">
        <div class="md:flex justify-around mt-8">
            <div class="md:mt-4 mx-10">
                <h1 class="text-yellow-600">Confirmados</h1>
                <p class="number">{{ info.data.confirmed.value }}</p>
            </div>
            <div class="mt-4 mx-10">
                <h1 class="text-red-600">Muertos</h1>
                <p class="number">{{ info.data.deaths.value }}</p>
            </div>
            <div class="mt-4 mx-10 mb-8">
                <h1 class="text-green-600">Recuperados</h1>
                <p class="number">{{ info.data.recovered.value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
    info: Object
  }
}
</script>