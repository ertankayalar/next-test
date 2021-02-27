import React from 'react'

export default function index() {
  return <div>hello product category page</div>
}

export async function getStaticPaths() {
  return {
    // Opt-in to on-demand generation for non-existent pages
    fallback: true,
    paths: [
      // return the paths needed here, this is just an example

      { params: { category: 'books', page: '1' } },
      { params: { category: 'books', page: '2' } },
      { params: { category: 'books', page: '3' } },
      { params: { category: 'electronic', page: '1' } },
      { params: { category: 'electronic', page: '2' } },
      { params: { category: 'electronic', page: '3' } },
      { params: { category: 'electronic', page: '4' } },
      { params: { category: 'electronic', page: '5' } },
      { params: { category: 'electronic', page: '6' } },
      { params: { category: 'electronic', page: '7' } },
    ],
  }
}

export async function getStaticProps({ params }) {
  console.log('product category sub pages:', params)
  // fetch data based on category and page
  //  const {products, totalPages} = await getProductsByCategory(params.category, params.page)
  const totalPages = 50
  const page = parseInt(params.page)

  return {
    props: {
      //    products,
      category: params.category,
      currentPage: page,
      totalPages,
    },
  }
}
