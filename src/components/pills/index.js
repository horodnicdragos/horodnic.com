const Pills = ({values}) => (
    <div>
        {values.split(',').map(w =>
            <div class="f6 f5-ns dib pa2 ma1 dark-gray ba b--black-20">{w}</div>
        )}
    </div>
)

export default Pills
