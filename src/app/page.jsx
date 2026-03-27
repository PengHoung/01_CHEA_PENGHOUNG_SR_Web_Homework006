import CustomerHomepageCardComponent from './component/CustomerHomepageCardComponent'
import ProductHomepageCardComponent from './component/ProductHomepageCardComponent'

export default function ItemsPage() {

  return (
    <div className="w-full h-screen flex gap-8 items-center justify-center flex-1">
      <CustomerHomepageCardComponent/>
      <ProductHomepageCardComponent/>
    </div>
  );
}