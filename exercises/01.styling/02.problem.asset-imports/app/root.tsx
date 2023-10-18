import { type LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Scripts } from '@remix-run/react'
// 🐨 import the svg favicon here (use a default import)
import favIconUrl from './assets/favicon.svg'
import { KCDShop } from './kcdshop.tsx'

console.log(favIconUrl)

export const links: LinksFunction = () => {
	// 🐨 swap the hard-coded href here with the default import of the favicon
	return [{ rel: 'icon', type: 'image/svg+xml', href: favIconUrl }]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Links />
			</head>
			<body>
				<p>Hello World</p>
				<Scripts />
				<KCDShop />
				<LiveReload />
			</body>
		</html>
	)
}
