using Microsoft.EntityFrameworkCore.Migrations;

namespace Facturacion.Migrations
{
    public partial class MyFirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Descripcion",
                table: "Productos",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Descripcion",
                table: "Productos",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
