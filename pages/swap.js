export default function swap() {
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">You pay</h2>
          <p>USDC</p>
          <div className="card-actions justify-end">
            <input
              type="text"
              placeholder="0.0"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <p>Trust Seed Token</p>
            <input
              type="text"
              placeholder="0.0"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
