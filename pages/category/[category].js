export default function index({ currentPage, category, totalPages }) {
  return (
    <div>
      <p>currentPage:{currentPage}</p>
      <p>category: {category}</p>
      <p>totalPages:{totalPages}</p>
    </div>
  )
}

export async function getStaticProps({ params }) {
  // fetch data based on category and page
  //  const {products, totalPages} = await getProductsByCategory(params.category, params.page)
  const totalPages = 50
  const page = 1

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

      { params: { category: 'books' } },
      { params: { category: 'ert' } },
      { params: { category: 'kitap' } },
      { params: { category: 'books' } },
    ],
  }
}
