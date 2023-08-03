export function updateURLParameter(url: string, param: string, paramVal: string) {
	var newAdditionalURL = "";
	var tempArray = url.split("?");
	var baseURL = tempArray[0];
	var additionalURL = tempArray[1];
	var temp = "";
	if (additionalURL) {
		tempArray = additionalURL.split("&");
		for (var i = 0; i < tempArray.length; i++) {
			if (tempArray[i].split("=")[0] != param) {
				newAdditionalURL += temp + tempArray[i];
				temp = "&";
			}
		}
	}

	var rows_txt = temp + "" + param + "=" + paramVal;
	return baseURL + "?" + newAdditionalURL + rows_txt;
}

export function changeRoute(docLink: string, canvasLink: string) {
	const parentDocument = window.parent.document;
	if (parentDocument) {
		const link = parentDocument.querySelector<HTMLElement>(`a[href='#${docLink}']`);
		if (link) {
			link.click();
		} else {
			const parentWindow = window.parent.parent.document.defaultView;
			if (parentWindow) {
				parentWindow.location.href = updateURLParameter(
					parentWindow.location.href,
					"path",
					canvasLink
				);
			}
		}
	}
}
