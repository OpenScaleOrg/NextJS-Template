type User = {
	firstName: string;
	lastName: string;
	email: string;
	plan: string;
};

type QNAElementProps = {
	question: string;
	answer: string;
};

enum Types3D {
	shirt = 1,
	pants = 2,
}

type ModelPreview = {
	img: string;
	name: string;
	url: string;
	webgl: string;
};

type Models3D = {
	beanie: ModelPreview;
	cap: ModelPreview;
	hangingHoodie: ModelPreview;
	oversizedTshirt: ModelPreview;
	pantAnimated: ModelPreview;
	tshirt: ModelPreview;
	tshirtAnimated: ModelPreview;
};

type Models2D = {
	flatLayStyle: ModelPreview;
	hangingDisplay: ModelPreview;
	foldedView: ModelPreview;
	modelWearing: ModelPreview;
	studioShot: ModelPreview;
	lifestyle: ModelPreview;
};

type ModelData = {
	loaderUrl: string;
	dataUrl: string;
	frameworkUrl: string;
	codeUrl: string;
};

type PaymentProps = {
	name: string;
	email: string;
	plan: string;
	amount: string;
	orderID: string;
};

type WebhookPayload = {
	business_id: string;
	type: string;
	timestamp: string;
	data: {
		payload_type: string;
		payment_id: string;
		business_id: string;
		status: string;
		total_amount: number;
		currency: string;
		payment_method: string;
		payment_method_type: string | null;
		created_at: string;
		updated_at: string | null;
		disputes: any[];
		refunds: any[];
		customer: {
			customer_id: string;
			name: string;
			email: string;
		};
		subscription_id: string;
		product_cart: any | null;
		payment_link: string;
		tax: number;
		metadata: Record<string, any>;
		error_message: string;
		error_code: string;
		discount_id: string | null;
		settlement_amount: number;
		settlement_tax: number;
		settlement_currency: string;
		billing: {
			country: string;
			state: string;
			city: string;
			street: string;
			zipcode: string;
		};
		card_last_four: string;
		card_issuing_country: string;
		card_type: string;
		card_network: string;
		brand_id: string;
		digital_products_delivered: boolean;
	};
};
