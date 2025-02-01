interface EpisodesProps {
    params: {
        slug: string
    }
}
export default function Episodes({params}: EpisodesProps) {
    const { slug } = params;

    
    
    return (
      <div>
        Hello episodes, {slug}
      </div>
    )
  }
  