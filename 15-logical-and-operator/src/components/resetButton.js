function ResetButton({ count, style, resetCount }) {

  return  count > 0 && (
    <div>
      <button style={style} onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton