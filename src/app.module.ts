import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MediaModule } from "./media/media.module";
import { MenuModule } from "./menu/menu.module";
import { MenuItemModule } from "./menu_item/menu_item.module";
import { TableModule } from "./table/table.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { WorkTimeModule } from "./work_time/work_time.module";
import { ReservationModule } from "./reservation/reservation.module";
import { AdminModule } from "./admin/admin.module";
import { CustomerModule } from "./customer/customer.module";
import { StaffModule } from "./staff/staff.module";
import { ReviewModule } from "./review/review.module";
import { RatingModule } from "./rating/rating.module";
import { OrderItemModule } from "./order_item/order_item.module";
import { OrderModule } from "./order/order.module";
import { PaymentModule } from "./payment/payment.module";
import { LanguageModule } from "./language/language.module";
import { QrCodeModule } from "./qr-code/qr-code.module";
import { CategoryModule } from "./category/category.module";
import { WorkDayModule } from "./work_day/work_day.module";
import { DepartmentModule } from "./department/department.module";
import { RoleModule } from "./role/role.module";
import { StaffRoleModule } from "./staff_role/staff_role.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(`mongodb://localhost/${process.env.DB_NAME}`),
    MediaModule,
    MenuModule,
    MenuItemModule,
    TableModule,
    RestaurantModule,
    WorkTimeModule,
    ReservationModule,
    AdminModule,
    CustomerModule,
    StaffModule,
    ReviewModule,
    RatingModule,
    OrderItemModule,
    OrderModule,
    PaymentModule,
    LanguageModule,
    QrCodeModule,
    CategoryModule,
    WorkDayModule,
    DepartmentModule,
    RoleModule,
    StaffRoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
