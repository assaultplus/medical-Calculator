/**
 * 膝高による身長推定式 ( 宮澤式 Knee-Height 法 )
 * 
 * @param 	{string} sex 		性別(ISO 5218)
 * @param 	{number} kneeHeight 膝高(cm)
 * @param 	{number} age 		年齢(year)
 * @returns {number}			推計身長(cm)
 * @see		https://mp.medicalonline.jp/products/article_list.php?magazine_code=aa7rinek&year=2005&volume=107&number=4
 */

function estimateHeightByKneeHeight(sex, kneeHeight, age) {
	/** @type {number}	推計身長(cm)*/
	let estHeight;

	/** 性別により算式が異なる */
	switch (sex) {
		case "1":
			/** 男性: 身長 = 64.02 + (膝高 × 2.12) - (年齢 × 0.07) */
			estHeight = 64.02 + ( kneeHeight * 2.12 ) - ( age * 0.07 );
			break;
		case "2":
			/** 女性: 身長 = 77.88 + (膝高 × 1.77) - (年齢 × 0.10) */
			estHeight = 77.88 + ( kneeHeight * 1.77 ) - ( age * 0.10 );
			break;
    	default:
			/** 上記以外は 0.0 を返す */
			estHeight = 0.0;
	}

	/** 小数第二位を四捨五入した結果を返す */
	return parseFloat(estHeight.toFixed(1));
}