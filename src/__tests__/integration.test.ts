import request from 'supertest'
import { app } from '../app'
import http from 'http'
import { IProduct, IPurchaseRequestData, IUser } from '../interfaces'
import { calculatePurchaseTaxValue } from '../utils/calculatePurchaseTaxValue'
import { mockedPurchaseInvalidProductId, mockedPurchaseInvalidUserId } from './mocks/mocks'


describe("App integration tests", () => {
    let connection = http.createServer(app)
    let responseUsers:IUser[] = []
    let responseProducts:IProduct[] = []

    beforeAll(async () => {
        connection.listen(3001)
    })

    afterAll(async () => {
        connection.close()
    })

    test("GET /users - Should return a list of users", async () => {
        const res = await request(app).get("/users")
        responseUsers = res.body

        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(100)
        expect(res.body[0]).toHaveProperty("id")
        expect(res.body[0]).toHaveProperty("name")
        expect(res.body[0]).toHaveProperty("tax")
    })

    test("GET /products - Should return a list of products", async () => {
        const res = await request(app).get("/products")
        responseProducts = res.body

        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(100)
        expect(res.body[0]).toHaveProperty("id")
        expect(res.body[0]).toHaveProperty("name")
        expect(res.body[0]).toHaveProperty("price")
    })

    test("POST /purchase - Should throw error when sending user with invalid id" , async () => {
        const res = await request(app).post("/purchase")
        .send(mockedPurchaseInvalidUserId(
            [
                responseProducts[0].id,
                responseProducts[1].id,
                responseProducts[2].id,
            ]
        ))

        expect(res.status).toBe(404)
        expect(res.body.message).toBe("User not found")
        expect(res.body.status).toBe("Error")
    })

    test("POST /purchase - Should throw error when sending invalid products ids" , async () => {
        const res = await request(app).post("/purchase")
        .send(mockedPurchaseInvalidProductId(responseUsers[0].id))

        expect(res.status).toBe(404)
        expect(res.body.message).toBe("Some or all products not found")
        expect(res.body.status).toBe("Error")
    })

    test("POST /purchase - Should return the value of a purchase", async () => {
        const purchaseRequest:IPurchaseRequestData = {
            userId: responseUsers[0].id,
            productsIds: [
                responseProducts[0].id,
                responseProducts[1].id,
                responseProducts[2].id,
            ]
        }
        const res = await request(app).post("/purchase").send(purchaseRequest)

        expect(typeof res.body).toBe("number")
        expect(res.body).toEqual(calculatePurchaseTaxValue(
            responseUsers[0],
            [
                responseProducts[0],
                responseProducts[1],
                responseProducts[2]
            ]
        ))
        
    })
})