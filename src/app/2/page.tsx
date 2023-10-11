import { css } from 'styled-system/css'
import { Button, buttonStyle } from '../../components/button'
import { Checkbox, checkboxStyle } from '../../components/checkbox'

export default function RecipesAndSlotRecipes() {
  const cbSmallClasses = checkboxStyle({ size: 'small' })
  const cbLargeClasses = checkboxStyle({ size: 'large' })

  return (
    <div className={css({ p: '12' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold', mb: '12' })}>
        Recipes and Slot Recipes
      </h1>

      <div className={css({ spaceY: '20' })}>
        <div className={css({ spaceY: '8' })}>
          <div>
            <button className={buttonStyle({ size: 'lg' })}>
              buttonStyle()
            </button>
          </div>
          <div>
            <a href="#" className={buttonStyle({ size: 'sm' })}>
              Link with buttonStyle()
            </a>
          </div>
        </div>

        <div className={css({ spaceY: '8' })}>
          <div>
            <label className={cbSmallClasses.root}>
              <input type="checkbox" className={cbSmallClasses.control} />
              <span className={cbSmallClasses.label}>Checkbox Small</span>
            </label>
          </div>
          <div>
            <label className={cbLargeClasses.root}>
              <input type="checkbox" className={cbLargeClasses.control} />
              <span className={cbLargeClasses.label}>Checkbox Large</span>
            </label>
          </div>
        </div>

        <div className={css({ spaceY: '8' })}>
          <Button variant="solid">{`<Button variant="solid" />`}</Button>
          <Checkbox size="large">{`<Checkbox />`}</Checkbox>
        </div>
      </div>
    </div>
  )
}
