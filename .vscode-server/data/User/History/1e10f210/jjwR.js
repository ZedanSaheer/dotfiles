const PATTERNS = [
    [
        new URLPattern({ pathname: '/:locale/:slug' }),
        ({ pathname }) => pathname.groups,
    ],
]

export const params = (url) => {
    const input = url.split('?')[0]
    let result = { locale: '', slug: '' };

    for (const [pattern, handler] of PATTERNS) {
        const patternResult = pattern.exec(input)
        if (patternResult !== null && 'pathname' in patternResult) {
            result = handler(patternResult)
            break
        }
    }
    return result
}