function ReturnMovie({movie}) {
  
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
        
                    <img
                        src={movie.image}
                        width='200'
                        height='250'
                        alt="movie"
                    />
                   
                <h6 className='mt-2'>{movie.title}</h6>
               {/* <Link to={`/theatresPage/${movie.id}`} className='btn btn-primary' href='#'>Reserve</Link> */}
            </div>
        </div>
    );
}
export default ReturnMovie;