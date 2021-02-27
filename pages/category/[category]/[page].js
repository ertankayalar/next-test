import Link from 'next/link'
import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'

export default function MyPage({ currentPage, category, totalPages }) {
  return (
    <div>
      <p>currentPage:{currentPage}</p>
      <p>category: {category}</p>
      <p>totalPages:{totalPages}</p>
    </div>
  )
}

export async function getStaticProps({ params }) {
  console.log(params)
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

export async function getStaticPaths() {
  return {
    // Opt-in to on-demand generation for non-existent pages
    fallback: true,
    paths: [
      // return the paths needed here, this is just an example

      { params: { category: 'books', page: '1' } },
      { params: { category: 'books', page: '2' } },
      { params: { category: 'books', page: '3' } },
      { params: { category: 'diyet', page: '1' } },
      { params: { category: 'diyet', page: '2' } },
      { params: { category: 'diyet', page: '3' } },
      { params: { category: 'diyet', page: '4' } },
      { params: { category: 'diyet', page: '5' } },
      { params: { category: 'diyet', page: '6' } },
      { params: { category: 'diyet', page: '7' } },
      { params: { category: 'hastaliklar', page: '1' } },
      { params: { category: 'hastaliklar', page: '2' } },
      { params: { category: 'hastaliklar', page: '3' } },
      { params: { category: 'yasam', page: '1' } },
      { params: { category: 'saglik', page: '1' } },
      { params: { category: 'saglik', page: '2' } },
      { params: { category: 'supplementler', page: '1' } },
      { params: { category: 'supplementler', page: '2' } },
      { params: { category: 'spor', page: '1' } },
    ],
  }
}
