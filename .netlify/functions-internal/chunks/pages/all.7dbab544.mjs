import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../astro.7b5a729d.mjs';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/cow/apps/CowDotDev/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CowDotDev - Zach Case", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
		<div class="astro-J7PV25F6">
			<svg class="group w-full astro-J7PV25F6" version="1.1" viewBox="0 0 23.026 17.841" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(-126.83 -142.27)" class="astro-J7PV25F6">
					<path class="horn astro-J7PV25F6" fill="currentColor" d="m130.04 145.57c0.90241 0.84137 1.9138 1.2654 3.0254 1.2651h3.5362c0.01-1e-3 0.0416 7e-3 0.0847 0.0286 0.13158 0.0635 0.37006 0.23424 0.70308 0.50729 0.44732 0.36583 0.75212 0.62018 0.91334 0.76094l0.0367 0.0321 0.0367-0.0318c0.16193-0.14111 0.46673-0.39546 0.91334-0.76129 0.22261-0.18203 0.40429-0.31821 0.54363-0.40781 0.0695-0.0448 0.12842-0.0776 0.17569-0.0988 0.0466-0.0215 0.0822-0.03 0.0988-0.0293h3.5669c1.1317 3.5e-4 2.1484-0.41839 3.0406-1.2499 0.89253-0.83079 1.5131-1.9131 1.8606-3.2427l0.0183-0.0698h-0.75459l-0.0117 0.0402c-0.32244 1.1303-0.86607 2.0447-1.6302 2.7485l0.0377 0.0413-0.0381-0.0413c-0.76411 0.70415-1.6023 1.052-2.5227 1.0523h-3.5669c-0.17639 3.5e-4 -0.38136 0.0649-0.62019 0.18944-0.23742 0.12383-0.48401 0.28857-0.74048 0.49354-0.12735 0.1016-0.22754 0.18309-0.30198 0.24447-0.0466 0.0388-0.0811 0.0681-0.10724 0.091-0.35066-0.29104-0.66005-0.53093-0.9264-0.71861-0.28045-0.1972-0.55033-0.29986-0.80962-0.29986h-3.5362c-0.92004-3.5e-4 -1.7533-0.34361-2.5075-1.0368-0.75353-0.69356-1.2919-1.6133-1.6154-2.7637l-0.0113-0.0406h-0.75389l0.0176 0.0691c0.32703 1.3099 0.94263 2.3876 1.845 3.2283"></path>
					<path class="head astro-J7PV25F6" fill="currentColor" d="m148.08 150.38c-0.32879 0.30868-0.74013 0.61242-1.2361 0.83855-0.49636 0.22613-1.0774 0.37606-1.7579 0.37606-0.54293 0-1.1508-0.0967-1.8295-0.33125l0.34678-1.7085h5.1915c-0.16404 0.23354-0.40111 0.53129-0.71473 0.82515m-6.9677 8.3344c-0.0914 0.45191-0.48895 0.77682-0.95039 0.77682h-0.48154c4e-3 -0.0279 8e-3 -0.0564 0.0141-0.0868 0.0512-0.28575 0.17357-0.67134 0.44344-0.99272 0.13547-0.16157 0.30692-0.30903 0.5327-0.42862 0.17462-0.0924 0.38312-0.16757 0.63394-0.2159zm-5.4635 0-0.19191-0.9465c0.35842 0.0692 0.63041 0.19297 0.84208 0.34361 0.19155 0.13652 0.33584 0.29668 0.44732 0.46566 0.16722 0.25295 0.25858 0.52811 0.30621 0.75389 0.0124 0.0572 0.0215 0.11077 0.0286 0.16016h-0.48189c-0.46108 0-0.85866-0.32491-0.95038-0.77682m-4.0658-7.1198c-0.69144-3.5e-4 -1.2799-0.15451-1.7815-0.38664-0.75177-0.34784-1.3074-0.87595-1.6729-1.3187-0.0991-0.1203-0.18309-0.23284-0.25435-0.33444h5.2835l0.34043 1.6771c-0.71331 0.25682-1.3497 0.36265-1.9152 0.36265m11.514-2.6592-0.77787 3.8322h-1.5085v0.61948h1.3829l-0.75777 3.7334c-0.5535 0.0663-0.99518 0.24448-1.3335 0.48649-0.25894 0.18485-0.45649 0.40428-0.6043 0.629-0.22261 0.33761-0.33585 0.6858-0.39547 0.96696-0.0226 0.10689-0.0374 0.20426-0.0469 0.28822h-1.3501c-7e-3 -0.0596-0.0159-0.12523-0.0289-0.1972-0.0642-0.35348-0.21307-0.84243-0.5782-1.2799-0.18203-0.21802-0.41875-0.42086-0.7179-0.57891-0.29175-0.15416-0.64241-0.26458-1.0548-0.31432l-0.75776-3.7338h1.3829v-0.61948h-1.5088l-0.77752-3.8322h-6.8432l0.22048 0.44661c0.0106 0.0205 0.35278 0.71367 1.0883 1.4168 0.3683 0.35136 0.83609 0.70485 1.4108 0.97119 0.57468 0.2667 1.2573 0.4445 2.0422 0.44415 0.61807 3.5e-4 1.2989-0.11112 2.0398-0.3683l1.4189 6.9917c0.15063 0.74084 0.80151 1.2732 1.5575 1.2732h3.5627c0.75601 0 1.4072-0.53234 1.5575-1.2732l1.4129-6.9617c0.70767 0.23601 1.3596 0.33866 1.9537 0.33831 0.78457 3.5e-4 1.4672-0.17745 2.0419-0.44415 0.8629-0.40005 1.4831-0.99412 1.8898-1.4862 0.40711-0.49283 0.60184-0.88618 0.6096-0.9017l0.22014-0.44661z"></path>
				</g>
			</svg>
			<h1 class="astro-J7PV25F6">Cow.Dev</h1>
			<h2 class="astro-J7PV25F6">Zach Case</h2>
			<h2 class="astro-J7PV25F6"><a href="https://www.linkedin.com/in/cowdotdev/" target="_blank" class="astro-J7PV25F6">LinkedIn</a></h2>
		</div>
	</main>
` })}`;
}, "/Users/cow/apps/CowDotDev/src/pages/index.astro");

const $$file = "/Users/cow/apps/CowDotDev/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
